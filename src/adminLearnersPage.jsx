import { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./firebase";

function LearnersPage() {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [updatingUsers, setUpdatingUsers] = useState([]);

  // ----------------------
  // Fetch Users
  // ----------------------
  useEffect(() => {
    const fetchUsers = async () => {
      setLoadingUsers(true);
      try {
        const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const usersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  // ----------------------
  // Block / Unblock User
  // ----------------------
  const toggleBlockUser = async (userId, isBlocked) => {
    try {
      setUpdatingUsers((prev) => [...prev, userId]);
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { isBlocked: !isBlocked });

      // Update UI immediately
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, isBlocked: !isBlocked } : u
        )
      );
    } catch (error) {
      console.error("Error updating user status:", error);
    } finally {
      setUpdatingUsers((prev) => prev.filter((id) => id !== userId));
    }
  };

  // ----------------------
  // Helper: Calculate Insights
  // ----------------------
  const getLearningInsight = (user) => {
    const totalModules = user.unlockedModules?.length || 0;
    const completedModules = Object.keys(user.progress || {}).length;
    let completedLessons = 0;
    let totalLessons = 0;

    Object.values(user.progress || {}).forEach((module) => {
      completedLessons += module.completedLessons?.length || 0;
      totalLessons += module.totalLessons || module.completedLessons?.length || 0;
    });

    return { totalModules, completedModules, completedLessons, totalLessons };
  };

  return (
    <section className="section glanc">
      <div>
        <center>
          <h2>Learners</h2>
          <p>Block / Unblock Users Here!</p>

          <div className="slideee">
            {loadingUsers ? (
              <p>Loading users...</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th style={{ minWidth: 250, textAlign: "left" }}>User Info</th>
                    <th title="Member Since">Joined</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    const insights = getLearningInsight(user);
                    return (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td style={{ maxWidth: 250, textAlign: "left" }}>
                          <div style={{ display: "flex" }} className="card">
                            <div>
                              <h3 title="name">{user.name}</h3>
                              <h4 title="email">{user.email}</h4>
                            </div>
                          </div>
                          <div>
                            <p>Learning Insight</p>
                            <p>
                              <b>
                                Certificates {insights.completedModules} | Modules{" "}
                                {insights.totalModules} | Lessons {insights.completedLessons} 
                              </b>
                            </p>
                          </div>
                          <div>
                            <p>Community Insight</p>
                            <p>
                              <b>
                                Posts {user.posts || 0} | Blogs {user.blogs || 0} | Replays{" "}
                                {user.replays || 0}
                              </b>
                            </p>
                          </div>
                        </td>
                        <td>
                          {user.createdAt instanceof Timestamp
                            ? user.createdAt.toDate().toLocaleDateString()
                            : "-"}
                        </td>
                        <td>
                          {user.isBlocked ? (
                            <span style={{ color: "red", fontWeight: "bold" }}>
                              Blocked
                            </span>
                          ) : (
                            <span style={{ color: "green", fontWeight: "bold" }}>
                              Active
                            </span>
                          )}
                        </td>
                        <td>
                          <button
                            className="cta mini outlines"
                            style={{ width: "auto", margin: 5, padding: "0px 10px" }}
                            disabled={updatingUsers.includes(user.id)}
                            onClick={() => toggleBlockUser(user.id, user.isBlocked)}
                          >
                            {updatingUsers.includes(user.id) ? (
                              <div className="spinner" style={{ color: "var(--accent)" }}>
                                ...
                              </div>
                            ) : user.isBlocked ? (
                              "Unblock"
                            ) : (
                              "Block"
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </center>
      </div>
    </section>
  );
}

export default LearnersPage;
