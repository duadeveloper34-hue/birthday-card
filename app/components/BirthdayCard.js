"use client";
import React, { useState } from "react";
import confetti from "canvas-confetti";
import "../styles/birthdaycard.css";

export default function BirthdayCard() {
    const [showMessage, setShowMessage] = useState(false);
    const [randomBg, setRandomBg] = useState(false);

    const celebrate = () => {
        confetti({
            particleCount: 200,
            spread: 200,
            origin: { y: 0.7 },
        });
    };

    const openMessage = () => {
        setShowMessage(true);
    };

    const closeMessage = () => {
        setShowMessage(false);
    };

    const surprise = () => {
        const surprise = () => {
            setRandomBg(!randomBg);

            const container = document.querySelector(".birthday-container");

            for (let i = 0; i < 20; i++) {
                const balloon = document.createElement("div");
                balloon.classList.add("balloon");

                // Random horizontal position
                balloon.style.left = Math.random() * 100 + "%";

                // Random balloon color
                const colors = ["#ff2e9a", "#00eaff", "#8b5cf6", "#ffbb00", "#ff5e00"];
                balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

                container.appendChild(balloon);

                // Remove ballon after animation
                setTimeout(() => balloon.remove(), 4000);
            }
        };
        surprise();
    };

    return (
        <div className={`birthday-container ${randomBg ? "surprise-bg" : ""}`}>
            <h1 className="title">🎉 Happy Birthday Ghulam Murtaza 🎉</h1>

            <div className="card">
                <div className="birthday-wish">
                    <p>
                        Wishing you a day filled with love, joy, and all your favorite things.
                        May this year bring you endless happiness and unforgettable memories.
                        Happy Birthday! 🎂🎈
                    </p>
                </div>
            </div>
            
            <div className="buttons">
                <button className="btn" onClick={celebrate}>Celebrate 🎉</button>
                <button className="btn" onClick={openMessage}>Message ✉️</button>
                <button className="btn" onClick={surprise}>Surprise ✨</button>
            </div>

            {/* Message Modal */}
            {showMessage && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>💌 Birthday Message</h2>
                        <p>
                            Dear <b>Murtaza</b>,
                            Happy Birthday, my forever person 💛
                            Tumhari presence mere liye blessing se kam nahi… Tum ho tu sab kuch perfect lagta hai.
                            I love you more than words can ever say. 🌙🤍
                        </p>
                        <button className="close-btn" onClick={closeMessage}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

