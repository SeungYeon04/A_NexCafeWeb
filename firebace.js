<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PC방 웹사이트</title>
    <link rel="stylesheet" href="styles.css">
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCPD8XVhcOzEpB9CmxKci5bbMiFfh0uWzU",
            authDomain: "rabbirdaily.firebaseapp.com",
            projectId: "rabbirdaily",
            storageBucket: "rabbirdaily.appspot.com",
            messagingSenderId: "601402050095",
            appId: "1:601402050095:web:169808f3364b918b29a8da",
            measurementId: "G-EME7G2FCGB"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('login-form').addEventListener('submit', function(event) {
                event.preventDefault();

                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const loginMessage = document.getElementById('login-message');

                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        loginMessage.textContent = '로그인 성공!';
                        loginMessage.style.color = 'green';
                    })
                    .catch((error) => {
                        loginMessage.textContent = `로그인 실패: ${error.message}`;
                        loginMessage.style.color = 'red';
                    });
            });
        });
    </script>
</head>
<body>
    <header>
        <div class="container">
            <div class="title">
                <h3 style="font-family:Arial, Helvetica, sans-serif;">PC cafe</h3>
                <h1 style="color: blue; font-family:Arial, Helvetica, sans-serif; margin-left: 4px;">NEX</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">MY PC</a></li>
                    <li><a href="#about">상품 결제</a></li>
                    <li><a href="#services">PC방 대회</a></li>
                    <li><a href="#news">소식과 이벤트</a></li>
                    <li><a href="#contact">고객센터</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section id="home">
            <div class="container">
                <div id="login-container">
                    <h2>로그인</h2>
                    <form id="login-form">
                        <input type="email" id="email" placeholder="이메일" required>
                        <input type="password" id="password" placeholder="비밀번호" required>
                        <button type="submit">로그인</button>
                    </form>
                    <div id="login-message"></div>
                </div>
            </div>
        </section>
        <!-- 추가 섹션 -->
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2024 PC방 이름. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
