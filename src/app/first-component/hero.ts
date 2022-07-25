export interface IHero{
    name:string,
    age:string,
    imgSrc:string
}
export interface IStarWars{
    name:string,
    results:Array<Object>
}
export interface IMovieDetails{
    id?:number,
    url?:string,
    name?:string,
    type?:string,
    language?:string,
    genres?:string[],
    schedule?:any,
    summary?:any,
    image?:any,
    premiered?:string,
    runtime?:number
}