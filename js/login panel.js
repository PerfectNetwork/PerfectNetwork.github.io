// تعديل دالة التحقق من تسجيل الدخول
function checkLogin(event) {
    event.preventDefault(); // منع إرسال الفورم بشكل افتراضي

    // الحصول على قيم المستخدم وكلمة المرور المدخلة
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // التحقق من صحة البيانات المدخلة
    if ((username === "7ORS" && password === "852010") || 
        (username === "Schider" && password === "838555") ||
        (username === "alknass22" && password === "289199") ||
        (username === "3_1.4" && password === "258963147")) {

        // إذا كانت البيانات صحيحة، اعرض رسالة النجاح
        var successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block'; // إظهار الرسالة

        // إخفاء الرسالة بعد 1.5 ثانية والتوجه إلى صفحة "Add products.html"
        setTimeout(function() {
            successMessage.style.display = 'none'; // إخفاء الرسالة
            window.location.href = 'Add products.html'; // التوجه إلى صفحة المنتجات
        }, 1500); // 1.5 ثانية
    } else {
        // إذا كانت البيانات خاطئة، إظهار رسالة الخطأ
        var errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block'; // إظهار الرسالة
    }
}
