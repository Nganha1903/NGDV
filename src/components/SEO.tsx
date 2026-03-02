import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | Kim Khí NGDV Hưng Yên`;
    
    // Update meta description if it exists
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
