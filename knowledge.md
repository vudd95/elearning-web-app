# Routing

- Nếu sử dụn
- Basic: thực mục có file page.tsx như là sign-in => page.tsx thì sẽ tạo ra đường dẫn của webapp là /sign-in
- Lưu ý trong thư mục phải có file `page.tsx`
- Nested routes: app/hello/world/page.tsx => đường dẫn sẽ là /hello/world (như thế này sẽ cố định k dynamic, hello là segment 1 còn world là segment 2)
- Segement dynamic (phân đoạn): [name] => [course] như thế này thì đường dẫn động nhưng nếu [course]/lession/page.tsx => course có thể động và tuỳ ý nhưngg lession thì phải giữ nguyên
- Group sẽ không tạo ra routing (dashboard) => sẽ không tạo ra đường dẫn là dashboard mà chỉ nhóm các thư mục có chức năng trong dashboard vào 1 khối cho dễ quản lý
- Catch all segement: sign-in/[...sign-in], shop/[...shop] =>
- Optional catch-all segêmnt: [[...sign-in]]
- Ví dụ có đường dẫn là shop, shop/a, shop/b, shop/a/b thì Catch all segment thì chỉ chấp nhận shop/a, shop/b, shop/a/b còn không chấp nhận shop
- Lưu ý khi để 2 thư mục dynamic segment cùng cấp thì sẽ bị lỗi

# Params

- Params:
- Search Params:

# Layout

# Image: next/image

- Image yêu cầu 3 thuộc tính là src, alt, width height
- Nếu sử dụng thuộc tính fill thì không cần width và height. Tuy nhiên thẻ image sẽ trở thành absolute cho nên cần có 1 phần tử chứa nó sử dụng thuộc tính position: relative tuỳ vào mục đích code
- Khi sử dụng src từ bên ngoài thì phải thiết lâpj trong next.config.ts
  `images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
      port: "",
      pathname: "/**",
    },
  ],
},`
