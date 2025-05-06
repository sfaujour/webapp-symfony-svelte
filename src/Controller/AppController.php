<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AppController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        $pageData = [
            'title' => 'Welcome to Symfony + Svelte + shadcn',
            'initialName' => 'Symfony 11231231'
        ];
        
        return $this->render('app/index.html.twig', [
            'pageData' => $pageData
        ]);
    }
} 
