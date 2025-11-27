import { AboutUsBlock } from "@/components/section/AboutUsBlock";
import { ServicesBlock } from "@/components/section/ServicesBlock";
import { WelcomBlock } from '@/components/section/WelcomBlock';
import { Footer } from '@/components/ui/Footer';
import { ModalWindow } from "@/components/ui/ModalWindow";
import { useState, useEffect } from "react";
import './styles/global/fonts.scss';

export function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    return (
        <>
            {isModalOpen && <ModalWindow setHandleClose={setIsModalOpen} />}

            <WelcomBlock onOpenModal={() => setIsModalOpen(true)} />
            <ServicesBlock />
            <AboutUsBlock />
            <Footer />
        </>
    );
}