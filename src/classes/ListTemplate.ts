import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container:HTMLUListElement){}

  render(item:HasFormatter, heading:string, position:'start' | 'end'){
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.textContent = heading;

    li.append(h4);

    const p = document.createElement('p');
    p.textContent = item.format();
    li.append(p);

    if(position === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}



/*
1.register li in container
2.create render method to make new li to container
  --accepts arguments,invoice or payment,a heading, a position
  --create html template li h4 p
  --add li template to start/end of the list
*/

