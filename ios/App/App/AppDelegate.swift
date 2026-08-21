import UIKit
import Capacitor
import AVFoundation
import MediaPlayer

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        // 1. Setup 24/7 Native Background Audio Session (Spotify / Apple Music Grade)
        do {
            try AVAudioSession.sharedInstance().setCategory(
                .playback,
                mode: .default,
                options: [.mixWithOthers, .allowAirPlay, .allowBluetooth]
            )
            try AVAudioSession.sharedInstance().setActive(true)
        } catch {
            print("[Souliff iOS] Failed to activate 24/7 Background Audio Session: \(error)")
        }
        
        // 2. Setup Remote Command Center (Lockscreen & AirPods Controls)
        setupRemoteCommandCenter()
        setupNowPlayingLiveStream()
        
        return true
    }
    
    private func setupNowPlayingLiveStream() {
        var nowPlayingInfo = [String: Any]()
        nowPlayingInfo[MPMediaItemPropertyTitle] = "Souliff Free (소울리프)"
        nowPlayingInfo[MPMediaItemPropertyArtist] = "24시간 힐링 사운드스케이프"
        nowPlayingInfo[MPNowPlayingInfoPropertyIsLiveStream] = true
        nowPlayingInfo[MPNowPlayingInfoPropertyPlaybackRate] = 1.0
        
        if let image = UIImage(named: "AppIcon-60x60@3x") ?? UIImage(named: "AppIcon-60x60@2x") {
            nowPlayingInfo[MPMediaItemPropertyArtwork] = MPMediaItemArtwork(boundsSize: image.size) { _ in image }
        }
        MPNowPlayingInfoCenter.default().nowPlayingInfo = nowPlayingInfo
    }
    
    private func setupRemoteCommandCenter() {
        let commandCenter = MPRemoteCommandCenter.shared()
        
        commandCenter.playCommand.isEnabled = true
        commandCenter.playCommand.addTarget { event in
            NotificationCenter.default.post(name: Notification.Name("SouliffNativePlay"), object: nil)
            return .success
        }
        
        commandCenter.pauseCommand.isEnabled = true
        commandCenter.pauseCommand.addTarget { event in
            NotificationCenter.default.post(name: Notification.Name("SouliffNativePause"), object: nil)
            return .success
        }
        
        commandCenter.togglePlayPauseCommand.isEnabled = true
        commandCenter.togglePlayPauseCommand.addTarget { event in
            NotificationCenter.default.post(name: Notification.Name("SouliffNativeToggle"), object: nil)
            return .success
        }
    }

    func applicationWillResignActive(_ application: UIApplication) {}
    func applicationDidEnterBackground(_ application: UIApplication) {}
    func applicationWillEnterForeground(_ application: UIApplication) {}
    func applicationDidBecomeActive(_ application: UIApplication) {}
    func applicationWillTerminate(_ application: UIApplication) {}
}
