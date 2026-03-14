import { useEffect, useState } from "react";

export default function useFetchPhotos() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://picsum.photos/v2/list?limit=30")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => setPhotos(data))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    return { photos, loading, error }
};

// Method Two
// useEffect Logic with asyn/await method 
// useEffect(() => {
//     (async () => {
//         try {
//             const res = await fetch("https://picsum.photos/v2/list?limit=30");

//             if (!res.ok) {
//                 throw new Error("Failed to fetch");
//             }

//             const data = await res.json();
//             setPhotos(data);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setLoading(false);
//         }
//     })();
// }, [])