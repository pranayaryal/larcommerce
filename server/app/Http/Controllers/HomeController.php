<?php

namespace App\Http\Controllers;

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
        \Stripe\Stripe::setApiKey('sk_test_kgqSnqchn19Vya946n5TZDkp');
        try {
          $intent = \Stripe\PaymentIntent::create([
            'amount' => 1000,
            'currency' => 'usd',
            'payment_method' => $request->payment_method_id,
            'confirm' => true,
            'error_on_requires_action' => true

          ]);

        if ($intent->status == 'succeeded') {
          echo json_encode(['success' => true]);
        } else {
          echo json_encode(['error' => 'Invalid payment status']);
        }

        } catch (\Stripe\Exception\ApiErrorException $e) {
          echo json_encode(['error' => $e->getMessage()]);
        }
    }


}
