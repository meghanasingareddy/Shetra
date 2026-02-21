import {
    collection,
    doc,
    getDocs,
    addDoc,
    deleteDoc,
    updateDoc,
    query,
    where,
    setDoc,
    getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// ─── Guardian Contacts ───────────────────────────

export interface Guardian {
    id?: string;
    name: string;
    phone: string;
    userId: string;
}

export async function getGuardians(userId: string): Promise<Guardian[]> {
    const q = query(collection(db, "guardians"), where("userId", "==", userId));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Guardian));
}

export async function addGuardian(guardian: Omit<Guardian, "id">): Promise<string> {
    const ref = await addDoc(collection(db, "guardians"), guardian);
    return ref.id;
}

export async function deleteGuardian(id: string): Promise<void> {
    await deleteDoc(doc(db, "guardians", id));
}

// ─── User Profile ────────────────────────────────

export interface UserProfile {
    name: string;
    phone: string;
    email: string;
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
    const snap = await getDoc(doc(db, "users", userId));
    if (!snap.exists()) return null;
    return snap.data() as UserProfile;
}

export async function saveUserProfile(userId: string, profile: UserProfile): Promise<void> {
    await setDoc(doc(db, "users", userId), profile, { merge: true });
}
