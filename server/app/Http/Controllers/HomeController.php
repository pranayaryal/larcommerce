<?php

namespace App\Http\Controllers;
use Auth;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function checkout()
    {
        return view('checkout');
    }

    public function pay(Request $request)
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_API_KEY'));
         $intent = \Stripe\PaymentIntent::create([
          'amount' => 1090,
          'currency' => 'usd',
          'metadata' => ['integration_check' => 'accept_a_payment'],
          'payment_method_types' => ['card'],
          'receipt_email' => 'drpranayaryal@gmail.com',
         ]);


          session(['client_secret' => $intent->client_secret]);
          echo json_encode(['success' => true, 'client_secret' => $intent->client_secret ]);

    }

    public function getSecret(Request $request)
    {
      $client_secret = $request->session()->get('client_secret');
      echo json_encode(['client_secret' => $client_secret]);

    }

    public function logout(Request $request)
    {
      Auth::logout();
      echo json_encode(['success' => 'You have beeen logged out']);
    }


    public function checkLoggedIn(Request $request)
    {
      if (Auth::user()) {
        //echo json_encode(['success' => 'You are logged in']);
        echo json_encode(['success' => true]);
      }
      else { 
        //echo json_encode(['success' => 'You are not logged in']);
        echo json_encode(['success' => false]);
      }
    }



}
