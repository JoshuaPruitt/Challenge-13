// TODO: Create an interface for the Candidate objects returned by the API
 export default interface Candidate {
    id: number;
    image: any;
    username: string;
    name: string;
    location?: string;
    email: string;
    company: string;
    bio: string;
    htmlUrl: string;
    acceptUser?: (id: number) => void;
    declineUser?: (id: number) => void;
};