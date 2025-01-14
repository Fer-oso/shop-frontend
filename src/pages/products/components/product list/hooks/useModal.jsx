import { useCallback, useState } from "react";

export const useModal = () =>{

 const [showModal, setShowModal] = useState(false);

 const [selectedItem, setSelectedItem] = useState(null);

  // Función para abrir el modal
  const openModal = useCallback((item) => {
    setSelectedItem(item);
    setShowModal(true);
  }, []);

  // Función para cerrar el modal con efecto fade-out
  const closeModal = useCallback(() => {
    setShowModal(false);
    setTimeout(() => setSelectedItem(null), 300);
  }, []);

  return {
    openModal,
    closeModal,
    showModal,
    selectedItem,
  };
}