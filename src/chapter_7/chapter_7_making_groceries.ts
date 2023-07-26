import { endAdventure, haveAdventures } from "../..";
import { askQuestion, clear, print } from "../ui/console";

type Banana = "Banana";
type Orange = "Orange";
type Apple = "Apple";

type Fruits = Array<Banana | Orange | Apple>;

export function makingGroceries(): void {
  clear(true);
  print(
    "You have wake up and you noticed you don't have any fruits in your house! 😱"
  );
  print("You want to eat some fruits and return to Wonderland! 🥳");
  print("Time to make groceries");

  let fruits: Fruits = ["Banana", "Orange", "Apple"];

  if (fruits) {
    print(`You bought a lot of fruits. 🥳`);
    return askQuestion("Press ENTER to re-enter Wonderland! ", haveAdventures);
  } else {
    print(`You don't have fruit at home, you are really hungry" 😭`);
    return endAdventure();
  }
}
