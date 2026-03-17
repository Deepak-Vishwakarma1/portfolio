import React, { useState } from "react";
import "./certification.css";
import Heading from '../common/header/Heading'
import exp from "../../certificate/exp.png";
import cert1 from "../../certificate/cert1.png";
import cert2 from "../../certificate/cert2.png";

function Certification() {
    const [activeTab, setActiveTab] = useState("experience");
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        { id: 1, type: "experience", title: "", img: exp },
        { id: 2, type: "certificate", title: "", img: cert1 },
        { id: 3, type: "certificate", title: "", img: cert2 }
    ];

    const filteredData = certificates.filter(item =>
        activeTab === "experience" ? item.type === "experience" : item.type === "certificate"
    );

    const openModal = (cert) => {
        setSelectedCert(cert);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCert(null);
    };

    return (
        <section className="cert-section">

            <Heading
                subtitle="EXPERIENCE & CERTIFICATE"
            />

            <div className="cert-buttons">
                <button
                    className={activeTab === "experience" ? "active" : ""}
                    onClick={() => setActiveTab("experience")}
                >
                    Experience
                </button>
                <button
                    className={activeTab === "certificate" ? "active" : ""}
                    onClick={() => setActiveTab("certificate")}
                >
                    Certificates
                </button>
            </div>

            <div className="cert-grid">
                {filteredData.map(cert => (
                    <div
                        className="cert-card"
                        key={cert.id}
                        onClick={() => openModal(cert)}
                    >
                        <div className="cert-img-wrapper">
                            <img src={cert.img} alt={cert.title} />
                        </div>
                        <p className="cert-name">{cert.title}</p>
                    </div>
                ))}
            </div>

            {modalOpen && selectedCert && (
                <div className="cert-modal" onClick={closeModal}>
                    <span className="cert-modal-close">&times;</span>
                    <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedCert.img} alt={selectedCert.title} />
                        <p>{selectedCert.title}</p>
                        <a
                            href={selectedCert.img}
                            download={selectedCert.title}
                            className="cert-download-btn"
                        >
                            Download
                        </a>
                    </div>
                </div>
            )}

        </section>
    );
}

export default Certification;
