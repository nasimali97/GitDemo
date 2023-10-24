// api.ts
// Photo.ts
export type Photo = {
    id: string;
    urls: {
      regular: string;
    };
    description: string;
    user: {
      username: string;
    };
    likes: number;
    // Add other properties as needed
  };
  ;
  
  const ACCESS_KEY = "wCF7jugpsiS3ydLOpkHHo19wlZVTNQgWIXcTK1eoIC0";
  const headerList = {
    "Content-Type": "application/json",
    Authorization: `Client-ID ${ACCESS_KEY}`,
  };
  
  export const getPhotos = async (): Promise<Photo[]> => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/`, {
        headers: headerList,
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch photos");
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
