// LocalStorage'dan malumotlarni olish
let coins = localStorage.getItem("coins") ? parseInt(localStorage.getItem("coins")) : 0;
let lastBonusDate = localStorage.getItem("lastBonusDate") || "";
let taskCompleted = localStorage.getItem("taskCompleted") === "true";

document.getElementById("coin-count").innerText = coins;

// 🟢 BOSISH FUNKSIYASI
function tap() {
    coins++;
    document.getElementById("coin-count").innerText = coins;
    localStorage.setItem("coins", coins);
}

// 🟢 KUNLIK BONUS FUNKSIYASI
function getBonus() {
    let today = new Date().toDateString();

    if (lastBonusDate === today) {
        alert("❌ Siz bugun bonus oldingiz! Ertaga qayta urinib ko‘ring.");
    } else {
        coins += 10000;
        document.getElementById("coin-count").innerText = coins;
        localStorage.setItem("coins", coins);
        localStorage.setItem("lastBonusDate", today);
        document.getElementById("bonus-btn").disabled = true;
        alert("🎉 Kunlik bonus oldingiz!");
    }
}

// 🟢 TOPSHIRIQLAR (MISOL UCHUN INSTAGRAMGA OBUNA BO‘LISH)
function completeTask() {
    if (!taskCompleted) {
        coins += 10000;
        document.getElementById("coin-count").innerText = coins;
        localStorage.setItem("coins", coins);
        localStorage.setItem("taskCompleted", "true");
        taskCompleted = true;
        document.getElementById("task-btn").disabled = true;
        alert("✅ Topshiriq bajarildi, 10,000 coin qo‘shildi!");
    } else {
        alert("❌ Bu topshiriqni allaqachon bajargansiz.");
    }
}

// 🟢 SAHIFA YUKLANGANDA HOLATNI TEKSHIRISH
window.onload = function() {
    let today = new Date().toDateString();

    if (lastBonusDate === today) {
        document.getElementById("bonus-btn").disabled = true;
    }

    if (taskCompleted) {
        document.getElementById("task-btn").disabled = true;
    }
};

// 🟢 VAZIFALAR SAHIFASIGA O‘TISH
function goToTasks() {
    window.location.href = "tasks.html";
}

// 🟢 ORQAGA QAYTISH
function goBack() {
    window.history.back();
}