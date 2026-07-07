import { collection, getDocs } from "firebase/firestore";
import styles from "./admin.module.css";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

export default function Admin() {
  const [listCad, setListCad] = useState([]);

  useEffect(() => {
    getListCad();
  }, []);

  async function getListCad() {
    try {
      const cadRef = collection(db, "cadastros");

      const snapshot = await getDocs(cadRef);

      const list = snapshot.docs.map((doc) => ({ ...doc.data() }));
      console.log(list);

      setListCad(list);
    } catch (error) {
      console.error("Error", error);
    }
  }
  return (
    <section className={styles.container}>
      <h1>Todos os cadastros</h1>
      <p>Tem {listCad.length} cadastros</p>
      <ul className={styles.list}>
        {listCad.map((cad, index) => (
          <li className={styles.item}>
            <div>{index + 1}</div>
            <div>{cad.name}</div>
            <div>
              <a href={`mailto:${cad.email}`}>{cad.email}</a>
            </div>
            <div>{cad.number}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
