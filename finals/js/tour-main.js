var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)

function loadTableWithFilters()
{
    var node_main = document.querySelector('#main-table-body');
    node_main.innerHTML = '';

    for (var i = 0; i < petData.length; i ++)
     {
        if ((filterType === 'canada' && petData[i].type === 'canada') ||
            (filterType === 'usa' && petData[i].type === 'usa') ||
            (filterType === 'mexico' && petData[i].type === 'mexico') ||
            (filterType === ''))
        {
               
            {
             var ant = document.createElement('tr');
             var mouseImage = document.createElement('td');
             var img = document.createElement('img');
             img.src = petData[i].image.src;
             img.alt = petData[i].image.alt;
             img.width = petData[i].image.width;
             img.height = petData[i].image.height;
             mouseImage.appendChild(img);
             var bull = document.createElement('td');
             var goat = document.createElement('h4');
             var petName = document.createTextNode(petData[i].name);
             goat.appendChild(petName);
             var rat = document.createElement('p');
             rat.innerHTML = petData[i].description;
             var bug = document.createElement('span');
             
             bull.appendChild(goat);
             bull.appendChild(rat);
             bull.appendChild(bug);

             ant.appendChild(mouseImage);
             ant.appendChild(bull);
                        
             node_main.appendChild(ant);
           }
       }
    }
}

window.onload = function ()
{
    loadTableWithFilters();
}

function filterCanada()
{
    filterType = 'canada';
    loadTableWithFilters();
}

function filterUSA()
{
    filterType = 'usa';
    loadTableWithFilters();
}

function filterMexico()
{
    filterType = 'mexico';
    loadTableWithFilters();
}

function filterAllPlaces()
{
    filterType = '';
    filterAgeMax = Number.MAX_VALUE;
    filterAgeMin = 0;
    loadTableWithFilters();
}




