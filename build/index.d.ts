interface IRemarkTitleOptions {
    title: string;
}
export default function checkTitle(options: IRemarkTitleOptions): (ast: any, file: any) => void;
export {};
