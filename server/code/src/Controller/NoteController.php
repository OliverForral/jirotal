<?php

namespace App\Controller;

use App\Entity\Note;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class NoteController extends Controller
{
    /**
     * @Route("/notes/get-all", methods={"GET"})
     */
    public function getAllNotes()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $noteRepository = $this->getDoctrine()->getRepository(Note::class);
        $notes = $noteRepository->findAll();

        $data = $notes;
        $status = 200;
        $headers = array();
        $context = array();

        return $this->json($data, $status, $headers, $context);
    }

    /**
     * @Route("/notes/create-new", methods={"POST"})
     */
    public function createNew(Request $request)
    {
        $noteData = $request->request->get('note');

        $entityManager = $this->getDoctrine()->getManager();
        
        $note = new Note();
        $note->setTitle($noteData['title']);
        $note->setDescription($noteData['description']);
        $entityManager->persist($note);
        $entityManager->flush();

        $data = array(
            'id' => $note->getId(),
            'title' => $note->getTitle(),
            'description' => $note->getDescription(),
        );
        $status = 200;
        $headers = array();
        $context = array();

        return $this->json($data, $status, $headers, $context);
    }
}