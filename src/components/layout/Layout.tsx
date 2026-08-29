import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingActions } from '../common/FloatingActions';
import { WhatsAppOrderModal } from '../common/WhatsAppOrderModal';
import { WMITPopup } from '../common/WMITPopup';
import { useGlobalTracker } from '../../hooks/useGlobalTracker';

export function Layout() {
  // Mount global tracking hook
  useGlobalTracker();

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [wmitPopupOpen, setWmitPopupOpen] = useState(false);

  const handleOpenOrderModal = (medicineName = "") => {
    setSelectedMedicine(medicineName);
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F0] dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] transition-colors duration-200">
      <Header onOpenOrderModal={() => handleOpenOrderModal()} />

      <main className="flex-1">
        {/* Pass down order modal opener context via Outlet context */}
        <Outlet context={{ openOrderModal: handleOpenOrderModal }} />
      </main>

      <Footer 
        onOpenOrderModal={() => handleOpenOrderModal()} 
        onOpenWMITPopup={() => setWmitPopupOpen(true)} 
      />

      <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

      {orderModalOpen && (
        <WhatsAppOrderModal
          isOpen={orderModalOpen}
          onClose={() => {
            setOrderModalOpen(false);
            setSelectedMedicine("");
          }}
          initialMedicine={selectedMedicine}
        />
      )}

      {wmitPopupOpen && (
        <WMITPopup
          isOpen={wmitPopupOpen}
          onClose={() => setWmitPopupOpen(false)}
        />
      )}
    </div>
  );
}
