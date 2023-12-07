export const createCustomerTicket = async (ticketImage, name, surname) => {
    // Create a canvas element, add the image and text, covert to blob
    //for 1500 x 485 images
    var canvas = document.createElement("canvas");
    var layout = canvas.getContext("2d");
    let ticket = new Image();
    ticket.src = ticketImage;

    await new Promise((resolve, reject) => {
      ticket.onload = resolve;
      ticket.onerror = reject;
    });

    //image
    canvas.width = ticket.naturalWidth;
    canvas.height = ticket.naturalHeight;
    layout.drawImage(
      ticket,
      0,
      0,
      ticket.naturalWidth,
      ticket.naturalHeight
    );
    // text
    layout.rotate(4.71);
    layout.font = "52px Archive";
    layout.fillStyle = "#faf9f6";
    layout.textAlign = "center";
    layout.strokeText(name, -255, 1170);
    layout.fillText(name, -255, 1170);

    layout.font = "52px Archive";
    layout.fillStyle = "#faf9f6";
    layout.textAlign = "center";
    layout.strokeText(surname, -255, 1230);
    layout.fillText(surname, -255, 1230);
    
    // blob
    const dataBlob = await new Promise((resolve) =>
      canvas.toBlob((blob) => resolve(blob), "image/webp")
    );

    return dataBlob
  }
