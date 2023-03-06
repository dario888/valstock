export const resizeImage = (file: Blob, width: number, height: number) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        if (ctx) ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.9);
      };
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const downloadImage = (url: string, filename: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
};
