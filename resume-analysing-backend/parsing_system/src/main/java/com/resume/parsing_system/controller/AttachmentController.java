package com.resume.parsing_system.controller;

import com.resume.parsing_system.ResponseData;
import com.resume.parsing_system.entity.Attachment;
import com.resume.parsing_system.service.AttachmentService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.awt.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class AttachmentController {

    private AttachmentService attachmentService;

    public AttachmentController(AttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }

    @PostMapping("/resume/{fileId}")
    public ResponseData uploadFile(@RequestParam("file")MultipartFile file) throws Exception {
        Attachment attachment = null;
        String downloadURl = "";
        attachment = attachmentService.saveAttachment(file);
        downloadURl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/download/")
                .path(attachment.getId())
                .toUriString();

        return new ResponseData(attachment.getFileName(),
                downloadURl,
                file.getContentType(),
                file.getSize());
    }
    public void ReadPDFFile() throws Exception {
        // if the file is available in local machine
        File file = new File("C:\\Users\\Reddy\\Downloads\\file-sample_150kB.pdf");
        FileInputStream fis = new FileInputStream(file);
        PDDocument pdfDocument = PDDocument.load(fis);

        System.out.println("Number of Pages: " +pdfDocument.getPages().getCount());

        PDFTextStripper pdfTextStripper = new PDFTextStripper();
        pdfTextStripper.setStartPage(1); // comment this line if you want to read the entire document
        pdfTextStripper.setEndPage(3); // comment this line if you want to read the entire document
        String docText = pdfTextStripper.getText(pdfDocument);

        System.out.println(docText);

        Assert.assertTrue(docText.contains("Maecenas"));

        pdfDocument.close();
        fis.close();







    }