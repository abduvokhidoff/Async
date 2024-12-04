let button = document.querySelector('button');
let wrapper = document.querySelector('.wrapper');

button.addEventListener('click', () => {
    async function fetchData(url) {
        console.clear();
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            ReadFunction(data.results);
            return data;
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    const ReadFunction = (baza) => {
        wrapper.innerHTML = ''; 
        baza.map((user) => {
            let div = document.createElement('div');
            div.classList.add('flex', 'flex-col','rounded-[10px]', 'shadow-lg', 'py-[20px]', 'gap-[10px]', 'w-[250px]', 'px-[20px]' )
            div.innerHTML = `
            <div class="flex items-center justify-center">
                <img src="${user.picture.large}" alt="User Picture">
            </div>
            <div class="flex flex-col gap-[10px]">
                <p class="font-[Arial] font-[600] text-[18px] text-[grey]">${user.name.first} ${user.name.last}</p>
                <div class="flex items-center justify-between">
                    <p>${user.location.country}</p>
                    <p>${user.location.city}</p>
                </div>
            </div>
            <div class="flex flex-col items-center gap-[10px]">
                <p class="font-[Arial] text-[red]">${user.email}</p>
                <p>${user.phone}</p> 
            </div>
            `;
            wrapper.appendChild(div); 
        });
    };

    fetchData('https://randomuser.me/api/');
});
