// TODO: Create an interface for the Candidate objects returned by the API
 export default interface Candidate {
    readonly id: number;
    readonly image: any;
    readonly username: string;
    readonly name: string;
    readonly location?: string;
    readonly email: string;
    readonly company: string;
    readonly bio: string;
    readonly htmlUrl: string;
    declined?: boolean;
    acceptUser?: (id: number) => void;
    declineUser?: (id: number) => void;
};