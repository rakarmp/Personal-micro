import React from "react";

function article_1() {
  return {
    date: "16 Mei 2023",
    title: "React Hook, Huk, huk, eehhhmmmm.....",
    description: "React Hook.",
    style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: (
      <React.Fragment>
        <div className="article-content">
          <div align="center">
            <img
              src="/image5.png"
              alt="alt of the image"
              width="800"
              height="400"
              title="title of the image"
            />
          </div>
          <br />
          Akhir-akhir ini cuaca kurang bersahabat ya. Sungguh tidak kuduga
          persahabatan kita tenyata hanya sebatas ini, parah kamu ca 🤦 Bagi
          teman-teman yang sedang kurang lezat badan semoga cepat sembuh ya,
          ingat masih banyak bugs menanti 🤣 Anyway…. Busway…. which is
          literally… Halah React Hook diperkenalkan pertama kali di acara React
          Conf 2018 ( 25–26 Oktober 2018 ). Saat itu masih dalam tahap proposal
          dan baru masuk versi stable release di februari 2019 ( React 16.8 dan
          React Native 0.59 ). Sejak itu rakyat jagad react beramai-ramai
          memperbincangkan benda ini. React Hook membuat penulisan component
          lebih simple dan elegan. Tapi tidak semua yang simple itu mudah di
          pahami, setidaknya dari pengalamanku sendiri. ### Kenapa sih mesti
          pake React Hook ? Setelah melakukan riset yang tekun dan rukun,
          kesimpulannya adalah table di bawah ini. Perhatikan
          <br />
          <div align="center">
            <img
              src="/image2.png"
              alt="alt of the image"
              width="350"
              height="300"
              title="title of the image"
            />
          </div>
          <br />
          #### Sudah paham ya ? ##### Sampai disini ada pertanyaaan ? Gak ada,
          gak ada ya…. Baiklah sekian dan terimakasih 👏👏👏 Lanjut lanjut ahhh
          becanda mulu ### 1. Simplicity — Kemudahan dalam penulisan Dari sisi
          penulisan Function component lebih ringkas di banding class component,
          ya wajarlah karena fiturnya juga lebih sedikit tidak ada constructor,
          binding, dan method-method lifecycle seperti componentDidMount,
          componentDidUpdate dan lain sebagainya. Saya biasanya menulis
          component baru di function kemudian di refactor ke class ketika ada
          kebutuhan. Apakah penulisan class component lebih sulit ? Hmmm relatif
          ya, sejauh ini bagiku gak terlalu sulit, tapi ada banyak yang kurang
          nyaman ternyata. Yang jadi pertanyaanku selama ini adalah…. Kenapa ada
          harus ada 2 cara membuat component ? Kenapa tidak 3,4,5,6,7 dan 8 ?
          biar greget kan ### 2. State & Props — Data bagi sang component Karena
          function tidak memiliki state, tak heran jika pada akhir nya function
          hanya dijadikan sebagai presentational atau tampilan saja. Logic dan
          state di kelola oleh parent component ( teknik lifting state-up )
          Redux menggunakan pola container dan presetantional component. Cara
          kerjanya semua state & logic di kelola oleh redux ( container ) Child
          component subscribe ke container ( presetantional ). Redux tidak
          peduli child component bentuknya function atau class
          <div align="center">
            <img
              src="/image3.png"
              alt="alt of the image"
              width="350"
              height="300"
              title="title of the image"
            />
          </div>
          Redux bukan all in one solution untuk urusan state management.
          Terkadang malah terlalu overkill untuk project kecil atau project yang
          datanya tidak banyak atau kompleks. Redux juga butuh learning curve
          dan ritual panjang untuk problem yang skalanya kecil. ### 3. Lifecycle
          — Siklus hidup tumbuhan React
          <div align="center">
            <img
              src="/image4.png"
              alt="alt of the image"
              width="500"
              height="300"
              title="title of the image"
            />
          </div>
          Lifecycle di class component menawarkan fleksibilitas dalam membangun
          komposisi component dan beragam skenario, walaupun memang butuh
          sedikit usaha belajar untuk memahami cara kerjanya. Sayangnya
          eksklusifitas ini tidak ada di function. ### 4. Reuse Logic — Logika
          yang Bispak (Bisa Pakai) lagi Yang ketawa berarti paham. Bertobatlah
          🤔 Salah satu prinsip pengembangan sofware adalah DRY ( Don’t Repeat
          Yourself ). Prinsip ini kadang tidak berjalan mulus di class
          component. Sebagai contoh kita punya 100 component yang logic nya
          sama, hanya UI nya yang beda, anggaplah variasi component. Tapi karena
          component ini sangat bergantung ke internal state nya, apakah kita
          harus membuat duplikat 100 component ? gak ada cara lain ? Ada,
          problem seperti ini umum terjadi, solusinya bisa menggunakan pola High
          Order Component dan Render Props. Masalah selesai ? iya, tapi ada
          potensi masalah baru. Codenya semakin kompleks dan menambah node baru
          di DOM yang kemungkinan nanti bisa terjebak di Wrapper Hell. ### 5.
          Pure Component — Component murni Ini biasanya di sentuh kalau urusanya
          ke performance. Kalau aplikasi terasa lambat salah satu yang di tweak
          ya benda ini. Pure component hampir sama dengan class component
          bedanya di sini ada method shouldComponentUpdate. Contoh kasus, Setiap
          kali parent di re-render semua child componet juga ikut di re-render,
          ini defaultnya dari si react. Sebenarnya bukan masalah besar, yang
          menjadi masalah itu ketika ada child component yang melakukan proses
          komputasi yang berat. Ini akan di eksekusi setiap kali parent di
          re-render. Solusi bisa di refactor ke pure component, tujuannya supaya
          component ini nanti hanya di render ketika state atau prop berubah.
          Tapi ingat function component tidak memiliki fitur ini. Sayang sekali
          saudara-saudara ### 6. Learning Curve — Kurva belajar
          <div align="center">
            <img
              src="/image6.png"
              alt="alt of the image"
              width="500"
              height="500"
              title="title of the image"
            />
          </div>
          React Hook memang butuh sedikit learning curve terutama, pengetahuan
          tentang dasar react terutama lifecycle, high order component, render
          props akan banyak membantu nanti. Mulai dari React Hook basic seperti
          - useState - useEffect - useContext Kalau sudah nyaman dengan konsep
          diatas lanjut ke Hook tambahan berikut : - useReducer - useCallback -
          useMemo - useRef - useImperativeHandle - useLayoutEffect -
          useDebugValue ### 7. Kesimpulan Dan kesimpulannya adalah - Class
          Component akan tetap di support oleh react. Tidak harus buru-buru
          refactor. - Untuk project baru sudahlah pakai React Hook aja. - Untuk
          project yang sudah berjalan dan di production, sebelum upgrade react
          pertimbangkan dependensi package yang lain. Pastikan test nya sudah
          berjalan dengan baik. Gak lucu hanya karena mau pakai React Hook
          aplikasi yang selama ini bejalan baik tiba-tiba ada bugs. - Redux
          tidak wajib. Ambil teorinya gunakan React Context dan useReducer
        </div>
      </React.Fragment>
    ),
  };
}

// function article_2() {
//   return {
//     date: "7 May 2023",
//     title: "Artificial Intelligence in Healthcare",
//     description:
//       "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
//     style: ``,
//     body: (
//       <React.Fragment>
//         <h1>Content of article 2</h1>
//       </React.Fragment>
//     ),
//   };
// }

const myArticles = [article_1];

export default myArticles;
