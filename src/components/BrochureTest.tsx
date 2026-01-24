"use client";

import { useState } from "react";
import BrochureModal from "./BrochureModal";

export default function BrochureTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Test Brochure Modal
      </button>

      <BrochureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projectTitle="Test Project"
        brochureUrl="/brochures/Brigade Valencia.pdf"
      />
    </div>
  );
}