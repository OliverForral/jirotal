<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WorkItemRepository")
 */
class WorkItem
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $who;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $which;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $what;
    
    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $steps;
    
        /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    public function getId()
    {
        return $this->id;
    }

    public function getWho()
    {
        return $this->who;
    }

    public function setWho(string $who = null)
    {
        $this->who = $who;
    }

    public function getWhich()
    {
        return $this->which;
    }

    public function setWhich(string $which = null)
    {
        $this->which = $which;
    }

    public function getWhat()
    {
        return $this->what;
    }

    public function setWhat(string $what = null)
    {
        $this->what = $what;
    }

    public function getSteps()
    {
        return $this->steps;
    }

    public function setSteps(string $steps = null)
    {
        $this->steps = $steps;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function setTitle(string $title = null)
    {
        $this->title = $title;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription(string $description = null)
    {
        $this->description = $description;
    }
}
