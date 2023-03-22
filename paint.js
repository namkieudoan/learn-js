// Tạo một canvas và thiết lập kích thước
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Lấy context 2D từ canvas
const ctx = canvas.getContext('2d');

// Cờ để kiểm tra liệu chuột có đang được nhấn hay không
let isDrawing = false;

// Hàm bắt đầu vẽ
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(event.clientX, event.clientY);
});

// Hàm kết thúc vẽ
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Hàm vẽ khi di chuyển chuột
canvas.addEventListener('mousemove', (event) => {
  if (!isDrawing) return;
  ctx.lineTo(event.clientX, event.clientY);
  ctx.stroke();
});

// Hàm xử lý khi thay đổi kích thước cửa sổ
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

