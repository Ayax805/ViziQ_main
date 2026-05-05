let now = new Date();
const account =
{
    email: prompt(),
    password: prompt(),
    ['key' + 24 * now.getSeconds]: 'computed key'
};

let users = JSON.stringify(account);

async function start() 
{
    try
    {
        const resp = await fetch(users.json)
        const data = await resp.json();
        render(data);
    }   
    catch(err){} 
}
start()

function render(email = [], password = [])
{
    const HTML_Logins = email.map(toHTML[0]);
    const HTML_Passwords = email.map(toHTML[1]);
    list.innerHTML = HTML_Logins;
    list.innerHTML = HTML_Passwords;
}

function toHTML(email, password)
{
    return <li class="list-group-item">${email}</li>, <li class="list-group-item">${password}</li>
    
}