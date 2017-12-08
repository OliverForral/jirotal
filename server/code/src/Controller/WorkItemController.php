<?php

namespace App\Controller;

use App\Entity\WorkItem;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class WorkItemController extends Controller
{
    /**
     * @Route("/work-items/get-all", methods={"GET"})
     */
    public function getAllWorkItems()
    {
        $entityManager = $this->getDoctrine()->getManager();
        $workItemRepository = $this->getDoctrine()->getRepository(WorkItem::class);
        $workItems = $workItemRepository->findAll();

        $data = $workItems;
        $status = 200;
        $headers = array();
        $context = array();

        return $this->json($data, $status, $headers, $context);
    }

    /**
     * @Route("/work-items/create-new", methods={"POST"})
     */
    public function createNew(Request $request)
    {
        $workItemData = $request->request->get('workItem');

        $entityManager = $this->getDoctrine()->getManager();
        
        $workItem = new WorkItem();
        $workItem->setTitle($workItemData['title']);
        $workItem->setDescription($workItemData['description']);
        $entityManager->persist($workItem);
        $entityManager->flush();

        $data = $workItemData;
        $status = 200;
        $headers = array();
        $context = array();

        return $this->json($data, $status, $headers, $context);
    }
}