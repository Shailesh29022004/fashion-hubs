import { useEffect, useState } from "react";

export default function useProductSearch(term, tshirtProducts, rainProducts) {
    const [tshirtFiltered, setTshirtFiltered] = useState([]);
    const [rainFiltered, setRainFiltered] = useState([]);

    useEffect(() => {
        const searchTerm = term.toLowerCase();

        const tshirtResults = tshirtProducts.filter(product =>
            product.category.toLowerCase().includes(searchTerm)
        );

       

        setTshirtFiltered(tshirtResults);
       
    }, [term, tshirtProducts]);

    return { tshirtFiltered};
}