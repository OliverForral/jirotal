<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class NoteController
{
    /**
     * @Route("/notes/get-all")
     */
    public function getAllNotes()
    {
        $data = array();
        $status = 200;
        $headers = array();
        $json = false;

        return new JsonResponse($data, $status, $headers, $json);
    }
}