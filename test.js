// סינון ומיון מערך של מספרים זוגיים ממערך
const filterAndSortEvenNumbers = (arr) => {
    return arr.filter(element => element % 2 == 0).sort((a, b) => a - b);
}
// מחיקת כפיליות
const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const capitalizeFirstLetter = (str) => {
    const arr = str.split(' ');
    return arr.map(word => word[word.length-1] != '.' ? word.charAt(0).toUpperCase() + word.slice(1) : word).join(' ');
}

const saveTasks = (arr) => {
    localStorage.setItem('tasks', JSON.stringify(arr));
}

const loadTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
}

const addTask = (task) => {
    const tasks = loadTasks() || [];
    tasks.push(task);
    saveTasks(tasks);
}

const removeTask = (task) => {
    const tasks = loadTasks().filter(t => t.id != task.id);
    saveTasks(tasks);
}