import React from "react";

export default function DemoFunction() {
  //Đối với function component bên dưới lệnh return sẽ là giao diện của thẻ <DemoFunction />
  //Lưu ý: Nội dung của thẻ phải được bao phủ bởi 1 thẻ.
  return (
    <div>
      <p className="p-2 bg-dark text-light">Heloo</p>
      <p>Hello</p>
    </div>
  );
}
