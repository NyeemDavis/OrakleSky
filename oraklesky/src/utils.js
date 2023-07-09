import Day from './Day'


export function formatDate (dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

export function ConditionalRender({component, fallback}) {
    return component ? component : fallback;
} 

export function RenderDays ({ days }) {
  return days.map((day, index) => {
    return <Day dayInfo={day} key={index}/>
  })
}

export function changeTempUnit() {
  const temps = document.querySelectorAll('.temp');
  let tempString = temps.innerHTMl.split(" ")

  console.log(tempString)
}