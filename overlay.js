(function () {
    if (document.getElementById('customOverlay')) return; // Prevent multiple overlays

    let overlay = document.createElement('div');
    overlay.id = 'customOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // Dark semi-transparent
    overlay.style.color = 'white';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.fontSize = '24px';
    overlay.style.zIndex = '9999';

    overlay.innerHTML = `<div>
        <h2>Custom Overlay</h2>
        <p>This is a full-screen overlay.</p>
        <button id="closeOverlay" style="padding: 10px 20px; font-size: 16px;">Close</button>
    </div>`;

    document.body.appendChild(overlay);

    document.getElementById('closeOverlay').addEventListener('click', function () {
        document.body.removeChild(overlay);
    });
})();
