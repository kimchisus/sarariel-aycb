import { useEffect, useMemo, useState } from "react";

export const useOnScroll = () => {
    const [offset, setOffset] = useState(0);
    const onScroll = useMemo(() => () => setOffset(window.pageYOffset), []);

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    return offset;
};