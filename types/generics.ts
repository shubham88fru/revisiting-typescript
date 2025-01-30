function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("shubham"));
console.log(identity<number>(123));
console.log(identity<boolean>(true));
console.log(identity<Object>({ name: "shubham" }));

function getRandomElement<T>(arg: T[]): void {
  console.log(arg);
}

console.log(getRandomElement<number>([1, 2, 3, 4, 5]));
console.log(getRandomElement<string>(["shubham", "steele", "elton"]));
console.log(getRandomElement<boolean>([true, false, true, false]));

function merge<T, U>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

const mergedObj = merge({ name: "shubham" }, { age: 23 });
merge({ name: "shubham" }, 5); //allowed. Notice second arg is not even an object.

function merge2<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

merge2({ name: "shubham" }, { age: 23 });
// merge2({ name: "shubham" }, 5); //not allowed. Notice second arg is not an object.

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

//generic classes.
class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
songs.add({ title: "song1", artist: "artist1" });
songs.add({ title: "song2", artist: "artist2" });

const videos = new Playlist<Video>();
videos.add({ title: "video1", creator: "creator1", resolution: "1080p" });
videos.add({ title: "video2", creator: "creator2", resolution: "720p" });
// videos.add({title: "song2", artist: "someone"}); //not allowed.
