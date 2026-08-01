let selectedCategory = ''; 

const hindiData = {
    Notes: [
        { title: "हिंदी अध्याय 1: वर्णमाला और संधि", url: "https://google.com" },
        { title: "हिंदी अध्याय 2: समास और कारक", url: "https://google.com" },
        { title: "हिंदी अध्याय 3: पद्य खण्ड की व्याख्या", url: "https://google.com" },
        { title: "हिंदी अध्याय 4: व्याख्या - भाग 2", url: "https://google.com" },
        { title: "हिंदी अध्याय 5: व्याख्या - भाग 3", url: "https://google.com" },
        { title: "हिंदी अध्याय 6: व्याख्या - भाग 4", url: "https://google.com" },
        { title: "हिंदी अध्याय 7: व्याख्या - भाग 5", url: "https://google.com" },
        { title: "हिंदी अध्याय 8: व्याख्या - भाग 6", url: "https://google.com" },
        { title: "हिंदी अध्याय 9: व्याख्या - भाग 7", url: "https://google.com" },
        { title: "हिंदी अध्याय 10: व्याख्या - भाग 8", url: "https://google.com" },
        { title: "हिंदी अध्याय 11: व्याख्या - भाग 9", url: "https://google.com" },
        { title: "हिंदी अध्याय 12: व्याख्या - भाग 10", url: "https://google.com" },
        { title: "हिंदी अध्याय 13: व्याख्या - भाग 11", url: "https://google.com" },
        { title: "हिंदी अध्याय 14: व्याख्या - भाग 12", url: "https://google.com" },
        { title: "हिंदी अध्याय 15: व्याख्या - भाग 13", url: "https://google.com" },
        { title: "हिंदी अध्याय 16: व्याख्या - भाग 14", url: "https://google.com" },
        { title: "हिंदी अध्याय 17: व्याख्या - भाग 15", url: "https://google.com" },
        { title: "हिंदी अध्याय 18: व्याख्या - भाग 16", url: "https://google.com" },
        { title: "हिंदी अध्याय 19: व्याख्या - भाग 17", url: "https://google.com" },
        { title: "हिंदी अध्याय 20: व्याख्या - भाग 18", url: "https://google.com" },
        { title: "हिंदी अध्याय 21: व्याख्या - भाग 19", url: "https://google.com" },
        { title: "हिंदी अध्याय 22: व्याख्या - भाग 20", url: "https://google.com" },
        { title: "हिंदी अध्याय 23: जीवन परिचय (गद्य खण्ड)", url: "https://google.com" },
        { title: "हिंदी अध्याय 24: जीवन परिचय (पद्य खण्ड)", url: "https://google.com" },
        { title: "हिंदी अध्याय 25: जीवन परिचय (भाग 3)", url: "https://google.com" },
        { title: "हिंदी अध्याय 26: व्याख्या - भाग 21", url: "https://google.com" },
        { title: "हिंदी अध्याय 27: व्याख्या - भाग 22", url: "https://google.com" },
        { title: "हिंदी अध्याय 28: व्याख्या - भाग 23", url: "https://google.com" },
        { title: "हिंदी अध्याय 29: व्याख्या - भाग 24", url: "https://google.com" },
        { title: "हिंदी अध्याय 30: व्याख्या - भाग 25", url: "https://google.com" },
        { title: "हिंदी अध्याय 31: व्याख्या - भाग 26", url: "https://google.com" },
        { title: "हिंदी अध्याय 32: संस्कृत खण्ड - भाग 1", url: "https://google.com" },
        { title: "हिंदी अध्याय 33: संस्कृत खण्ड - भाग 2", url: "https://google.com" },
        { title: "हिंदी अध्याय 34: संस्कृत खण्ड - भाग 3", url: "https://google.com" },
        { title: "हिंदी अध्याय 35: संस्कृत खण्ड - भाग 4", url: "https://google.com" },
        { title: "हिंदी अध्याय 36: संस्कृत खण्ड - भाग 5", url: "https://google.com" },
        { title: "हिंदी अध्याय 37: व्याकरण - रस (Ras)", url: "https://google.com" },
        { title: "हिंदी अध्याय 38: व्याकरण खण्ड", url: "https://google.com" }
    ],
    MCQs: [
        { title: "हिंदी अध्याय 1: ऑब्जेक्टिव टेस्ट (MCQ)", url: "https://google.com" }
    ],
    Books: [
        { title: "क्लास 10 हिंदी NCERT बुक", url: "https://google.com" }
    ],
    Solutions: [],
    Videos: [],
    Formulas: []
};

function openSubjects(category, categoryName) {
    selectedCategory = category;
    document.getElementById('subject-title').innerText = `${categoryName}`;
    switchScreen('subject-screen');
}

function openContent(subject) {
    if (subject !== 'Hindi') {
        alert("यह विषय अभी तैयार नहीं है, इसके नोट्स जल्द ही आ रहे हैं!");
        return;
    }

    const container = document.getElementById('links-container');
    container.innerHTML = '';
    document.getElementById('content-title').innerText = `हिंदी - सामग्री सूची`;

    if (hindiData[selectedCategory] && hindiData[selectedCategory].length > 0) {
        hindiData[selectedCategory].forEach(item => {
            const a = document.createElement('a');
            a.href = item.url;
            a.target = "_blank";
            a.className = "content-item";
            a.innerHTML = `<span>${item.title}</span> <span>➔ खोलें</span>`;
            container.appendChild(a);
        });
    } else {
        container.innerHTML = "<p style='text-align:center; padding:30px; color:#999;'>इस सेक्शन में अभी हिंदी का मटीरियल अपलोड हो रहा.।</p>";
    }

    switchScreen('content-screen');
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goBack(screenId) {
    switchScreen(screenId);
}