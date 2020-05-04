import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from '../components/Like';

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <Like />,
        container
      );
    });
  });
  

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

describe("Testing Like Component", ()=>{
    it("Defaults to 0 Likes", ()=>{
        const pText = document.querySelector("p");
        expect(pText.textContent).toBe("Likes: 0");
    });

        
    it("Increases unitarily on increment click", ()=>{
        const pText = document.querySelector("p");
        const befNumber = parseInt(pText.textContent.split(':')[1]);
        const incButton = document.querySelector("#increment");
        act(()=>{
            incButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        const afterNumber = parseInt(pText.textContent.split(':')[1]);
        expect(afterNumber).toBe(befNumber+1);
    });

    it("Decreases unitarily on decrement click", ()=>{
        const pText = document.querySelector("p");
        const befNumber = parseInt(pText.textContent.split(':')[1]);
        const incButton = document.querySelector("#decrement");
        act(()=>{
            incButton.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        const afterNumber = parseInt(pText.textContent.split(':')[1]);
        expect(afterNumber).toBe(befNumber-1);
    });
    
    
});

