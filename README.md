# RMA THỐNG LINH — HAND MORSE AI VISION

Bản nâng cấp premium của hệ thống Hand Morse dùng MediaPipe Hands.

## Điểm mới
- Logo RMA premium: gear vàng + biểu tượng đỏ/navy + circuit cyan + Morse signature.
- Neon HUD camera, scan sweep, reticle, ambient particles, hand trail và signal burst.
- Độ nhạy 1–100%, adaptive threshold, ambiguity filter và ổn định gesture.
- Làm mượt landmark và confidence meter.
- Hiển thị latency, FPS, signal, tracking state.
- Âm thanh bật/tắt, hiệu ứng và hand trail có công tắc riêng.
- Giải mã dot / dash / end / clear theo cử chỉ bàn tay.

## Chạy
Mở bằng local server để trình duyệt cấp quyền camera. Có thể chạy `start-server.bat` trên Windows.

## Điều khiển
- Index pinch: dot `.`
- Middle pinch: dash `-`
- Ring pinch: commit ký tự
- Pinky pinch giữ: clear
- M: bật/tắt âm thanh
- Esc: xóa
- Thanh AI Control: chỉnh sensitivity, smoothing và effect intensity

## Lưu ý
MediaPipe Hands được tải từ jsDelivr nên cần Internet khi khởi chạy lần đầu.


## Khoảng trắng giữa các ký tự
Sau mỗi ký tự Morse được giải mã, hệ thống tự động thêm một dấu cách (` `), giúp chuỗi kết quả hiển thị rõ ràng theo dạng `R M A` thay vì `RMA`. Chức năng chèn khoảng trắng thủ công vẫn được giữ lại.
