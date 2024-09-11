// סינון ומיון מערך של מספרים זוגיים ממערך
const filterAndSortEvenNumbers = (arr) => {
    return arr.filter(element => element % 2 == 0).sort((a, b) => a - b);
}
// מחיקת כפיליות
const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
// הוספת אותיות גדולות למילים
const capitalizeFirstLetter = (str) => {
    const arr = str.split(' ');
    return arr.map(word => word[word.length-1] != '.' ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ');
}
// שמירת מערך משימות בלוקל סטורג
const saveTasks = (arr) => {
    localStorage.setItem('tasks', JSON.stringify(arr));
}
// החזרת מערך המשימות מהלוקל סטורג
const loadTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
}
// הוספת אובייקט משימה למערך הלוקל סטורג
const addTask = (task) => {
    const tasks = loadTasks() || [];
    tasks.push(task);
    saveTasks(tasks);
}
// מחיקת משימה מהמערך בלוקל סטורג
const removeTask = (id) => {
    const tasks = loadTasks().filter(t => t.id != id);
    saveTasks(tasks);
}
