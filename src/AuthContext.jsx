import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

// 1. Create Context
const AuthContext = createContext();

// 2. Provide a hook for easy use
export const useAuth = () => useContext(AuthContext);

// 3. AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); // user profile from Firestore
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch profile from Firestore
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();

          // Check if user is blocked
          if (userData.isBlocked) {
            alert("Your account has been blocked. Contact admin for support.");
            await signOut(auth); // Log the user out
            setCurrentUser(null);
            setLoading(false);
            return;
          }

          setCurrentUser(userData);
        } else {
          // fallback to basic auth info
          setCurrentUser({
            uid: user.uid,
            email: user.email,
          });
        }
      } else {
        setCurrentUser(null);
      }

      setLoading(false);
    });

    return unsubscribe; // cleanup
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
