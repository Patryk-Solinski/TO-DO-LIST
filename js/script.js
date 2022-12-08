{
    const tasks = [
        {
            content: "nagrac lekecje",
            done: false,

        },
        {
            content: "zjesc pierogi",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            ${task.done ? "style = \"text-decoration: line-through\"" : ""} 
            >
            ${task.content}
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

    };

    const addNewTask = (newTaskContent) =>{
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const onFormSubmit =(event) =>{
        event.preventDefauly();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === ""){
            return;
        }

       addNewTask(newTaskContent);
    };
    
    const init = () => {
        render();

        const form = doocument.querySelector(".js-form");

        form.addEventListener("submit",onFormSubmit)
    };

    init();
}