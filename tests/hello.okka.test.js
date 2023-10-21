import hello from "../utils/hello.okka.js"

it("should say Okka",()=>{
    const helloString=hello();
    console.log(helloString);

    //expect (helloString),toBe("Okka");
})