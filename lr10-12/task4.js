function computeExpression(x, y) {
    // Вычисляем числитель и знаменатель
    const sinX = Math.sin(x);
    const cosY = Math.cos(y);
    const numerator = sinX + cosY;
    const denominator = cosY - sinX;
    
    // Проверка деления на ноль
    if (Math.abs(denominator) < 1e-12) {
        return { error: "Деление на ноль (знаменатель равен 0)" };
    }
    
    // Тангенс произведения x*y
    const tanXY = Math.tan(x * y);
    
    // Результат
    const result = (numerator / denominator) * tanXY;
    
    // Округляем до двух знаков
    return {
        value: parseFloat(result),

        numerator: parseFloat(numerator),
        denominator: parseFloat(denominator),
        tanXY: parseFloat(tanXY)
    };
}